import Tab from '/tab.js'

const tab1 = new Tab({
	parentId: 'tab1Box',
	navClass: 'tab1-nav',
	contClass: 'tab1-cont'
})

const tab2 = new Tab({
	parentId: 'tab2Box',
	navClass: 'tab1-nav',
	contClass: 'tab1-cont',
	eventType: 'mouseover',
})

const tab3 = new Tab({
	parentId: 'tab3Box',
	navClass: 'tab1-nav',
	contClass: 'tab1-cont',
	contShowClass: 'active2'
})