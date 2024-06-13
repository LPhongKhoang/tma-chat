import { useCallback, useEffect } from "react";


export default function MyCounterEff() {
	const handleResize = useCallback(() => {
		console.log("RESIZE");
		alert("RESIZE alert");
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, [handleResize]);

    console.log("MyCounterEff render");

    // return <div>abc</div>
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: "400px",
                backgroundColor: "yellow",
                height: "100vh",
                // position: "relative",
            }}
        >
            <div style={{ height: "5vh", backgroundColor: "lightgrey" }}>Header</div>
			
            <div style={{ flex: 1, overflowY: "auto",paddingTop: "50px", paddingBottom: "80px" }}>
                {Array(200)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index}>Item {index}</div>
                    ))}
            </div>
            <div
                style={{
                    backgroundColor: "lightgrey",
                    height: "5vh",
                    padding: "5px 8px 15px 8px",
                }}
            >
                <textarea style={{display: 'block', width: "100%"}}></textarea>
            </div>
        </div>
    );
}