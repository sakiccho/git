public final var maxLife : float = 100; //最大体力・final修飾子をつけることで、変数を変更できなくなる。
public var life : float = 100;          //現在体力
 
function Start () {
    life = maxLife; //体力を全回復
}
 
function Update () {
    if(life <= 0){
        Dead();
    }
}
 
//ダメージ処理
function Damage (damage : float) {
    life -= damage; //引数（敵の攻撃力）分HPを減らす
}
 
//死亡処理（死亡時の演出はここ）
function Dead () {
    GameOver(); //ゲームオーバーにする
}
 
//ゲームオーバー処理
function GameOver () {
    Application.LoadLevel(Application.loadedLevel); //現在のシーンを再読込する
}
 var style : GUIStyle;	
function OnGUI () {
	style.fontSize = 40;
	if(life >= 30){
		style.normal.textColor = Color.green;
		} else {
		style.normal.textColor = Color.red;
		}
    GUI.Label(Rect(0,450,100,100),"Life: "+life, style);
}