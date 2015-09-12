public var System : ScoreSystem;
public var subScore : float = 10;   //落下した際の減点
 
function Start () {
    System = GameObject.Find("ScoreSystem").GetComponent(ScoreSystem);  //スコアシステムを代入
}
 
function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag == "Player"){
        //プレイヤーが落下した時
        col.gameObject.transform.position = Vector3.zero;   //キャラクターの位置を初期位置に
        System.Subtract(subScore);  //減点する・9/12関数表記ミスを訂正
    }else if(col.gameObject.tag == "Enemy"){
        //落下した物が敵の時
        //Destroy(col.gameObject);    //落下したオブジェクトを削除
        EnemySpawn.enemyCount -= 1;
    }
}