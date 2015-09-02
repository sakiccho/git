public var bullet : GameObject; //GameObject型変数bulletを宣言
public var spawn : Transform;   //Transform型変数spawnを宣言
public var speed : float = 1000;//float型変数speedを宣言。同時に1000を代入
 
public var rifle : Transform;   //修正箇所。銃オブジェクトのTransformを参照にする
public var interval : float = 0.3;  //何秒おきに
private var time : float = 0;   //経過時間
 
//毎フレーム実行される
function Update () {
    time += Time.deltaTime; //タイムを加算
    if(Input.GetButton("Fire1")){
    //マウスが左クリックされた時
        time += Time.deltaTime; //タイムを加算
        if(time >= interval){
        //time（経過時間）がintervalを上回った
            Shot();
            time = 0;   //初期化する do
        }
    }
}
 
//Shot関数
function Shot (){
    var obj : GameObject = GameObject.Instantiate(bullet);  //GameObject型変数objを宣言
    obj.transform.position = spawn.position;                //objに代入されたオブジェクトの位置をspawnオブジェクトに合わせる
    obj.GetComponent.<Rigidbody>().AddForce(transform.forward * speed);         //修正点
    //注意・今回のチュートリアルで使った銃は、向きが反転していたため、前後が逆になっています。そのため”-”を付けて向きを逆転させています        
    //objオブジェクトに付与されたrigidbodyを利用して前方向に1000の力を加える
}