public var score : float = 10;  //敵を倒した時にもらえるスコア
private var isQuitting : boolean = false;   //ゲーム終了後のオブジェクト生成回避
public var explosion : GameObject;  //爆発エフェクト
public var Score : ScoreSystem; //スコアシステムを使用する
 
public var sound : AudioSource; //AudioSourceコンポーネント
public var explosionSound : AudioClip; 
 
function Start () {
    Score = GameObject.Find("ScoreSystem").GetComponent("ScoreSystem");
}
 
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
    	sound.PlayOneShot(explosionSound);
        Instantiate(explosion, transform.position, Quaternion.identity);    //爆発エフェクトを生成
        Score.AddScore(score);  //修正箇所
    }
}