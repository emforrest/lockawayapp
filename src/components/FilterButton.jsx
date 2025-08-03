import { useState } from "react";

function FilterButton(props)
{
    const [text, setText] = useState(props.text);
    const [altText, setAltText] = useState(props.altText);

    function handleButtonClick()
    {

        switch (text)
        {
            case "Show Future":
                props.setFilter('AnyDate');
                break;
            case "Hide Future":
                props.setFilter('Ready');
                break;
            case "Show Completed":
                props.setFilter('AnyChecked');
                break;
            case "Hide Completed":
                props.setFilter('Uncompleted');
                break;
            default:
                break
        }

        var textPlaceholder = text;
        setText(altText);
        setAltText(textPlaceholder);
    }

    return (
        <>
            <button 
            type="button"
            onClick={handleButtonClick}
            >
                {text}
            </button>
        </>
    );
}

export default FilterButton;