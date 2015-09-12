public var score : float = 10;  //敵を倒した時にもらえるスコア
private var isQuitting : boolean = false;   //ゲーム終了後のオブジェクト生成回避
public var explosion : GameObject;  //爆発エフェクト
public var Score : ScoreSystem; //スコアシステムを使用する
public var life : float = 30;   //敵の体力
 
public var sound : AudioSource; //AudioSourceコンポーネント
public var hitSound : AudioClip; 

function Start () {
    Score = GameObject.Find("ScoreSystem").GetComponent("ScoreSystem");
    sound = this.gameObject.GetComponent(AudioSource);
}
 
 //Dmage関数
function Damage ( damage : float ){
    life -= damage;
    sound.PlayOneShot(hitSound);
     
    if(life <= 0){
        //体力が0以下になった時
        Dead(); //死亡処理を実行
    }
}
//やられた時に呼び出す。
function Dead () {
    Instantiate(explosion, transform.position, Quaternion.identity);    //爆発エフェクトを生成
    Score.AddScore(score);  //スコアを加算
    Destroy(this.gameObject);   //自身を削除
}
 
function OnApplicationQuit () {
//ゲームは終了しているか
    isQuitting = true;
}
 
//削除される際に実行
function OnDestroy () {
    if(!isQuitting){
        Instantiate(explosion, transform.position, Quaternion.identity);    //爆発エフェクトを生成
        Score.AddScore(score);  //修正箇所\
        EnemySpawn.enemyCount -= 1;
    }
}

