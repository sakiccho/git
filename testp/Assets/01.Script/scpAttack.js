public var attack : float = 25; //攻撃力
 
function Start () {
 
}
 
function Update () {
 
}
 
//衝突時に一回だけ呼びだされる
function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag == "Player"){
    //Playerと衝突した時
        Attack(col.gameObject); //攻撃する
    }
}
 
//攻撃する際に呼び出す
function Attack ( hit : GameObject) {
    hit.gameObject.SendMessage("Damage", attack);   //attack分のダメージを与える
}