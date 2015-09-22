public var interval : float = 3;
private var timer : float;

var style1 :GUIStyle;
 
function OnGUI () {
    GUI.Label(Rect(10, 10, 300, 100), "Game Clear!!\n" + "Score : " + ScoreSystem.score, style1);
}
