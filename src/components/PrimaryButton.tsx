type Props = {
    children:string;
};

export const PrimaryButton =({children}:Props) => {
    return (
        <button type="button" className="btn btn-primary">
            {children}
        </button>
    );
};
