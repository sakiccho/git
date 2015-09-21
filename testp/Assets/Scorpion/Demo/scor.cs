using UnityEngine;
using System.Collections;

public class scor : MonoBehaviour {
	public Animator anim;

	static int walkState = Animator.StringToHash("Base Layer.walk");
	static int idleState = Animator.StringToHash("Base Layer.idle1");
	private AnimatorStateInfo currentBaseState;

	void Start () {
		anim = gameObject.GetComponent<Animator>();
	}
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown(KeyCode.Alpha1))
		{
			anim.SetTrigger("ani1");
		}
		if(Input.GetKeyDown(KeyCode.Alpha2))
		{
			anim.SetTrigger("ani2");
		}
		if(Input.GetKeyDown(KeyCode.Alpha4))
		{
			anim.SetTrigger("ani4");
		}
		if(Input.GetKeyDown(KeyCode.Alpha5))
		{
			anim.SetTrigger("ani5");
		}
		if(Input.GetKeyDown(KeyCode.Alpha6))
		{
			anim.SetTrigger("ani6");
		}
		if(Input.GetKeyDown(KeyCode.Alpha7))
		{
			anim.SetTrigger("ani7");
		}
		if(Input.GetKeyDown(KeyCode.Alpha8))
		{
			anim.SetTrigger("ani8");
		}
		if(Input.GetKeyDown(KeyCode.Alpha9))
		{
			anim.SetTrigger("ani9");
		}
		currentBaseState = anim.GetCurrentAnimatorStateInfo(0);
		if(currentBaseState.nameHash == idleState)
		{
		if(Input.GetKeyDown(KeyCode.Alpha3))
			{
				anim.SetBool("walk",true);
			}

		}
		currentBaseState = anim.GetCurrentAnimatorStateInfo(0);
		if(currentBaseState.nameHash == walkState)
		{
			if(Input.GetKeyDown(KeyCode.Alpha3) || Input.GetKeyDown(KeyCode.Alpha2) || Input.GetKeyDown(KeyCode.Alpha1) || Input.GetKeyDown(KeyCode.Alpha4) || Input.GetKeyDown(KeyCode.Alpha5) || Input.GetKeyDown(KeyCode.Alpha6) || Input.GetKeyDown(KeyCode.Alpha7) || Input.GetKeyDown(KeyCode.Alpha8) || Input.GetKeyDown(KeyCode.Alpha9))
			{
				anim.SetBool("walk",false);
			}
			
		}
}
}