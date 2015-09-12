private var score : float = 0;  //スコア初期化
 
function Start () {
    score = 0;  //スコア初期化
}
 
function AddScore ( addScore : float ){
    score += addScore;
}
 
function Subtract ( subScore : float) {
    score -= subScore;
}
 var style : GUIStyle;	
function OnGUI () {
	style.fontSize = 30;
	style.normal.textColor = Color.white;
    GUI.Label(Rect(10,10,100,100),"Score: "+score, style);
}