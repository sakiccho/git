public var speed : float = 3;
public var player : Transform;
 
function Start () {
    player = GameObject.FindGameObjectWithTag("Player").transform;
    //プレイヤーを変数に代入。
}
 
function Update () {
    var playerPos : Vector3;    //プレイヤーの座標を代入
    playerPos = player.position;
    var direction : Vector3;    //向きを代入
    direction = playerPos - transform.position;
    transform.position = ( transform.position + ( direction.normalized * speed * Time.deltaTime));
    //位置を、自分の位置＋進みたい距離＆方向　とすることで、プレイヤーを追尾
    transform.LookAt(playerPos);    //プレイヤーの方を向く
}