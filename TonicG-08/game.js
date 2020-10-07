let view=document.getElementById("view");

let trie;
let boardSize;
let board;
let graph;
let choices;
let words;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function shuffle(array) {
	for(let i=array.length-1;i>0;i--) {
		let j=rnd(i+1);
		let tmp=array[i];
		array[i]=array[j]
		array[j]=tmp;		
	}
}



function dfs(x,y,depth,trie) {

	if(x<0 || x>=boardSize || y<0 || y>=boardSize) return;

	if(graph[y][x]) return;

  let k=board[y][x].toLowerCase().charCodeAt(0)-65;

	let trieNode=trie.next[k];

	if(trieNode==null) return;
	
	choices[depth]=board[y][x];

	if(trieNode.mark) words.push(choices.substr(1,depth));

	graph[y][x]=true;
	
	for(let j=-1;j<=1;j++) {
		for(let i=-1;i<=1;i++) {
			if(i || j) dfs(x+i,y+j,depth+1,trieNode);
		}
	}

	graph[y][x]=false;
}



function load() {
	trie=new Trie(null);
	for(let i=0;i<dict.length;i++) {
		Trie.add(trie,dict[i]);
	}
}



function init() {

  load();

	boardSize=4;

	shuffle(dice);
	
	board=new Array(boardSize);
	let k=0;
	for(let j=0;j<boardSize;j++) {
		board[j]=new Array(boardSize);
		for(let i=0;i<boardSize;i++) {
			board[j][i]=dice[k][rnd(dice[j].length)];
			k++;
		}
	}

	graph=new Array(boardSize);
	for(let j=0;j<boardSize;j++) {
		graph[j]=new Array(boardSize);
		for(let i=0;i<boardSize;i++) {
			graph[j][i]=false;
		}
	}

	choices=new Array(boardSize*boardSize);
	words=[];	
  for(let j=0;j<boardSize;j++) {
		for(let i=0;i<boardSize;i++) {
			dfs(i,j,0,trie);
		}
	}

}



function main() {

	init();

	let html="";

	for(let j=0;j<boardSize;j++) {
		for(let i=0;i<boardSize;i++) {
			html+=board[j][i];
		}
		html+="<br>";
	}
	
	for(let i=0;i<words.length;i++) {
	  html+=words[i]+"<br>";
	}

	view.innerHTML=html;	
}



main();
