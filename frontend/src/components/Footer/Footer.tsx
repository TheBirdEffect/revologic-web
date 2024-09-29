import React, { useCallback } from "react";
import { IFooterProps } from "./IFooterProps";
import { StackLayout } from "../../styles/core/ui/StackLayout";
import { TextButton } from "../../styles/core/Button";

export const Footer: React.FC<IFooterProps> = () => {

    const handlePrivacyClick = useCallback( () => {
        console.log("opensPrivacyPopup");
        
    }, [])

    const handleImpressClick = useCallback( () => {
        console.log("openImpressPopup")
    }, [])

    return (
        <StackLayout 
            justifyContent="center" 
            alignItems="center" 
            flexDirection="row"
            backgroundColor="headerFooterBg"
            >
            <TextButton onClick={handlePrivacyClick}>
                Privacy
            </TextButton>
            <TextButton onClick={handleImpressClick}>
                Impress
            </TextButton>
        </StackLayout>
    )
}