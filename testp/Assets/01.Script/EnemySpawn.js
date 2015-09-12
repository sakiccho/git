public var ground : Transform;  //地面オブジェクト
public var interval : float = 6;//何秒おきに敵を発生させるか
public var count : float = 2;   //一度にスポーンさせる敵の数
public var enemy : GameObject;  //敵オブジェクト
static public var enemyCount : int;	//enemy count on field
private var isQuitting : boolean = false;   //ゲーム終了後のオブジェクト生成回避
 
function Start () {
    Spawn();    //初期スポーン
    
}
 
function Update () {
    if(enemyCount <= 0){
        Spawn();
    }
}
 function OnApplicationQuit () {
//ゲームは終了しているか
    isQuitting = true;
}
function Spawn () {
	if(!isQuitting){
	    for(var i =0; i < count ; i++) {
	    //ランダム生成する際の範囲が-25~25なのは地面の大きさが50だから
	        var x : float = Random.Range(-35f, 35f);    //x座標をランダム生成
	        var z : float = Random.Range(-35f, 35f);    //z座標をランダム生成
	        var pos : Vector3 = Vector3(x, 5, z );//ランダム生成の位置座標を作成
	        pos += Vector3(0, 0, 0 );
	        
	        GameObject.Instantiate(enemy, pos, Quaternion.identity);
	        //第一引数は生成するオブジェクト
	        //第二引数は生成する座標
	        //第三引数は生成したオブジェクトの向き
	        enemyCount += 1;
	    }
	}
}