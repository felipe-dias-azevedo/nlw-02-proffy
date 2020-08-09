import React from 'react';
import {View} from 'react-native'
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollView contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}} style={styles.teacherList}>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    );
}

export default Favorites;