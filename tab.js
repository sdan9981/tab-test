/**
 * tab切换类
 */
export default class Tab{
	constructor(props){
		const defaultProps = {
			eventType: 'click',
			navShowClass: 'active',
			contShowClass: 'active',
			
		}
		this.params = {...defaultProps,...props}
		this.main = document.getElementById(this.params.parentId)
		this.navArr = this.main.querySelectorAll(`.${this.params.navClass}`)
		this.contArr = this.main.querySelectorAll(`.${this.params.contClass}`)
		this.initTab()
	}
	initTab(){
		for (let i = 0,len = this.navArr.length;i<len;i++){
			this.navArr[i].addEventListener(this.params.eventType,()=>{
				this.navArr.forEach(item=>{
					item.classList.remove(this.params.navShowClass)
				})
				this.navArr[i].classList.add(this.params.navShowClass)
				this.contArr.forEach(item2=>{
					item2.classList.remove(this.params.contShowClass)
				})
				this.contArr[i].classList.add(this.params.contShowClass)
			})
		}
	}
}