import React, { useEffect, useState } from "react";

export const NumericSpacer = (props: {size: 2 | 4 | 6 | 8 | 10, direction? : "horizontal" | "vertical"}) => {
    const [style, setStyle] = useState({});
    
    useEffect(() => {
        switch(props.direction) {
            case("horizontal"): setStyle({paddingHorizontal: props.size}); break;
            case("vertical"): setStyle({paddingVertical: props.size}); break;
            default: setStyle({padding: props.size}); break;
        }
    }, []);
    return <div style={style}/>;
};