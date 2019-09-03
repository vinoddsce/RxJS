class DataSource {

    constructor() {
        let i = 0;
        this._id = setInterval(() => this.emit(i++), 200);
    }

    emit(n) {
        const limit = 10;

        if (n === 5) {
            if (this.onerror) {
                this.onerror("Error");
            }
            this.destroy();
        }

        if (this.ondata) {
            this.ondata(n);
        }
        if (n === limit) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }

    destroy() {
        clearInterval(this._id);
    }
}
function myObservable(observer) {
    let datasource = new DataSource();
    datasource.ondata = (e) => observer.next(e);
    datasource.onerror = (err) => observer.error(err);
    datasource.oncomplete = () => observer.complete();
    return () => {
        datasource.destroy();
    };
}

/**
* now let's use it
*/
const unsub = myObservable({
    next(x) { console.log(x); },
    error(err) { console.log(err); },
    complete() { console.log('done') }
});


// setTimeout(unsub, 500);
































