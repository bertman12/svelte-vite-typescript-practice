<script lang=ts>
    const items: any[] = [
        {id: 0, value: 5, weight: 1},
        {id: 1, value: 2, weight: 2},
        {id: 2, value: 8, weight: 4},
        {id: 3, value: 1, weight: 5},
        {id: 4, value: 3, weight: 7},
    ];
    const maxWeight = 10;
    //look throught your items
    //score its value/weight, choose the highest score items to go into the bag
    //after adding an item you will need to evaluate the highest score again relative to what can fit in the remaining space, exclude items whose weight exceed the remaining space
    //always search what items can fit in the bag and has the highest score
    // const scoredItems:{id: number, score: number}[] = [];
    const valuedItems: any[] = []
    /**
     * Look throught the list, 
     * score the item 
     * add the best score to the new list that can fit
     * Remove the item from the next search
     * Only add the items that did not get added to the final list to the search list
     * 
     * 
     * 
    */
    const mutableItems = items.slice();
    let remainingWeight = maxWeight;
    let searchComplete = false

    function findValueItem(){
        let maxScore = 0;
        let valueItem:any = '';
        let finalIndex:number = 0;
        for (let x = mutableItems.length - 1; x >=0 ; x--) {
            const item = mutableItems[x];
            let itemScore = item.value/item.weight;

            if((item.weight <= remainingWeight) && (itemScore > maxScore)) {
                maxScore = itemScore;
                valueItem = mutableItems[x];
                finalIndex = x;
                console.log('Final Index: ',finalIndex);
            }
        }

        if(valueItem){
            remainingWeight = (remainingWeight - valueItem.weight);
            // mutableItems.splice(finalIndex, 1);
            console.log('Mutable Items inside the findValueItem() function: .......',mutableItems);
        }

        return valueItem;
    }

    do {
        if(remainingWeight > 0){
            let result = findValueItem();
            if(result){
                valuedItems.push(result);
            }
        }
        else searchComplete = true

    } while (!searchComplete);
</script>

<main>
    <p>
        {JSON.stringify(valuedItems)}
        Howdy
    </p>
</main>

<style>

</style>



