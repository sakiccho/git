public var timer : float = 3;   //何秒後に弾丸を消すか
public var attack : float = 10;
 
function Update (){ 
    Destroy(gameObject, timer); //自身を数秒後に消す
}
 
//IsTriggerがOnの時何かにぶつかったら実行する。
function OnTriggerEnter ( col : Collider ) {
    if(col.gameObject.tag == "Enemy" || col.gameObject.tag == "Boss"){
    //ぶつかったオブジェクトのTagがEnemyだった場合実行
        col.gameObject.SendMessage("Damage", attack);   //相手のDamage関数を実行する。
    }
    Destroy(gameObject);
}