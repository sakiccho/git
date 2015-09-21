public var ground : Transform;  //地面オブジェクト
public var interval : float = 5;//何秒おきに敵を発生させるか
public var count : float = 1;   //一度にスポーンさせる敵の数
public var enemy : GameObject;  //敵オブジェクト
static public var enemyCount : int;	//enemy count on field
private var isQuitting : boolean = false;   //ゲーム終了後のオブジェクト生成回避
public var boss : GameObject;
public var scpSpawn : Transform;   //Transform型変数spawnを宣言
private var timer : float;
 
function Start () {
    Spawn();    //初期スポーン
    
}
 
function Update () {
    timer += Time.deltaTime;
    if(timer >= interval){
        Spawn();
        timer = 0;
    }
}
 function OnApplicationQuit () {
//ゲームは終了しているか
    isQuitting = true;
}
function Spawn () {
	if(!isQuitting){
	    for(var i =0; i < count ; i++) {
	        var pos : Vector3 = transform.position;
	        
	        GameObject.Instantiate(enemy, pos, Quaternion.identity);
	        //第一引数は生成するオブジェクト
	        //第二引数は生成する座標
	        //第三引数は生成したオブジェクトの向き
	        enemyCount += 1;
	    }
	}
}