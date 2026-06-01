import { Node,Group} from "@visuallyjs/browser-ui"

function notInSameGroup(source: Node|Group, target: Node|Group) {
    return source.group == null || target.group == null || source.group !== target.group
}

const modelOptions = {
    beforeConnect:(source: Node|Group, target: Node|Group) => {
        return notInSameGroup(source, target)
    }
}

export default modelOptions
