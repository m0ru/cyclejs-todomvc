/*
* In: { A: A$, B: B$}
*
* Out: actions$:
*    |-----{type: 'A', data: {...}} ----
*       ------ {type: 'B', data: {...}} ---->
*/
export function mergeActions(actions) {
    let merged$ = Cycle.Rx.Observable.empty();
    for (let actionType of Object.keys(actions)) {
        const typed$ = actions[actionType].map(data => ({type: actionType, data}));
        merged$ = merged$.merge(typed$);
    }
    return merged$;
}

/*
* In: actions$:
*    |-----{type: 'A', data: {...}} ----
*       ------ {type: 'B', data: {...}} ---->
*
* Out: { A: A$, B: B$}
*/
export function splitActions(types, actions$) {
    let actions = {};
    for (let t of types) {
        actions[t] = actions$
            .filter(a => a.type === t)
            .map(a => a.data)
    }
    return actions;
}
