import {Inject, Injectable} from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: 'root'

})
export class MathService{
    private countData:number = 1
    currentCountData = new BehaviorSubject(this.countData)

    mathSvc:MathService=Inject(MathService)
    getCountData() {
        return this.countData
    }
    setCountData(newval:number) {
        this.countData = newval
        this.currentCountData.next(this.countData)
        console.log("Math Service SET DATA ", this.countData)
    }

}