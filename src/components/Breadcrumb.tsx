export const Breadcrumb = () => {
    const items = ["Home","Library","Date"]
    return (
        <>
            <p>パンくずリスト</p>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {items.map((item) =>(
                        <li key={item} className="breadcrumb-items">
                            <a href = "#">{item}</a>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

