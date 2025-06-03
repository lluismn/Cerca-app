import { Link } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function GoHomeButton() {
    return (
        <Link href='/' asChild>
            <Button title="Go home" />
        </Link>
    )
}