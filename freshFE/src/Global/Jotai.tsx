import {useAtom} from "jotai"
import {atomWithStorage} from "jotai/utils"

const globalState= atomWithStorage("Data", {} || null)

const mainGlobalState = () => {
    return useAtom(globalState)
}

export default mainGlobalState