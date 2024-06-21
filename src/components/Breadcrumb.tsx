export const Breadcrumb = () => {
    return (
        <>
            <p>パンくずリスト</p>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="#">Home</a>
                </li>
                
                <li className="breadcrumb-item">
                <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item">
                <a href="#">Date</a>
                </li>
            </ol>
            </nav>
            </>
    );
};

