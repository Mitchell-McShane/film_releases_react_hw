import Release from "./Release";

const ReleaseList = ({releases}) => {


    const releaseNodes = releases.map((release) => {
        return (
            <Release name={release.name} url={release.url} key={release.id} />
        )
    })

    return (
        <ul className="release-list">
        {releaseNodes}
        </ul>
    )
}

export default ReleaseList;