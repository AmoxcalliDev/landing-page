import packageJson from '../../../package.json';

export default function VersionComponent() {
    return <>
        <span className="font-bold">
            v{packageJson.version}
        </span>
    </>;
}