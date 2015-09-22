public var interval : float = 3;
private var timer : float;
public var selector : int;
var style1 :GUIStyle;
function Start () {
	selector = Random.Range(0, 2);
}
function OnGUI () {
	
	if(selector == 0){
    GUI.Label(Rect(10, 10, 300, 100), "粗チンDT乙!", style1);
    } else {
    GUI.Label(Rect(10, 10, 300, 100), "ねぇどんな気持ち?", style1);
    }
}


function Update () {
    timer += Time.deltaTime;
    if(timer >= interval){
    Application.LoadLevel("FPS World"); //load start scene
        timer = 0;
    }
}