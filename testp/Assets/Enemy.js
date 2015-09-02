private var isQuitting : boolean = false;   //ゲーム終了後のオブジェクト生成回避
public var explosion : GameObject;  //爆発エフェクト
 
//Dmage関数
function Damage (){
    Destroy(gameObject);    //自身を消去
}
 
function OnApplicationQuit () {
//ゲームは終了しているか
    isQuitting = true;
}
 
//削除される際に実行
function OnDestroy () {
    if(!isQuitting){
        Instantiate(explosion, transform.position, Quaternion.identity);    //爆発エフェクトを生成
    }
}