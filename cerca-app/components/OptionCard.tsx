import { Link, LinkProps } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

type OptionCardProps = {
    title: string;
    description?: string;
    icon: 'checklist' | 'baggage' | 'glosario';
    href: LinkProps['href'];
}

export default function OptionCard({  title, description, icon, href }: OptionCardProps) {
    const iconSource =
        icon === 'checklist' ? require('../assets/images/check-list.png') :
        icon === 'baggage' ? require('../assets/images/bottomNav/profesional-app.png') :
        require('../assets/images/glosario.png');
    
    return (
        <Link href={href} asChild>
            <Pressable style={styles.card}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={iconSource} style={styles.icon} />
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                        </View>
                    </View>
                    <>
                        {description && <AppText style={styles.description}>{description}</AppText>}
                    </>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        paddingLeft: 19,
        paddingRight: 19,
        paddingTop: 12,
        paddingBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 14,

        elevation: 5,
    },
    icon: {
        marginRight: 16,
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#313131',
        fontSize: 18,
    },
    description: {
        fontSize: 12,
        fontWeight: 'light',
        color: '#2C2C2C',
        marginTop: 4,
    }

})