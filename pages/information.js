export default function InformationPage() {
    return (
        <>
            <div className="topnav">
                <a href="/hackafun">Homepage</a>
            </div>

            <div className="tabs">
                <a href="#different-targets">Different targets</a>
                <a href="#how-eq-works">How EQ works</a>
                <a href="#applying-system-eq">Applying system EQ</a>
            </div>

            <div className="tabscontent">
                <div id="different-targets">
                    <h2>Different Targets</h2>
                </div>
                <div id="how-eq-works">
                    <h2>How EQ Works</h2>
                </div>
                <div id="applying-system-eq">
                    <h2>Applying System EQ</h2>
                </div>
            </div>
        </>
    );
}
