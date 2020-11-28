export class Task {
	static TS_COMPLETED = 'completed';
	static TS_INCOMPLETED = 'incompleted';

	constructor() {
		this.title = '';
		this.description = '';
		this.taskType = '';
		this.status = Task.TS_INCOMPLETED;
	}
}
