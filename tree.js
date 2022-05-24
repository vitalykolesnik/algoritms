const tree = [
{
    v: 5,
    c: [
        {
            v:10,
            c: [
                {
                    v:11,
                }
            ]
        },
        {
            v:7,
            c: [
                {
                v:5,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            ]
        },
    ]
}
]

const recursive = (tree) => {
    let summ = 0;
    tree.forEach(node => {
        summ += node.v
        if(!node.c) {
            return node.v
        }
        summ += recursive(node.c)
    })
    return summ
}

console.log(recursive(tree));

const iteration = (tree) => {
    if(!tree.length) {
        return 0
    }
    let summ = 0;
    let stack = []
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop()
        summ += node.v
        if(node.c){
            node.c.forEach(child => stack.push(child))
        }
    }
    return summ
}

console.log(iteration(tree));