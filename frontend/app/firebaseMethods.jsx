import { ref, onValue } from 'firebase/database';

const fetchUserData = (database, userId) => {
    const userRef = ref(database, `users/${userId}`);
    const userListener = onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if(userData) {
            console.log('User Data:', userData);
        }
    });

    return () => {
        userListener();
    };
};

const fetchUserMedications = (database, userId) => {
    const medicationsRef = ref(database, `users/${userId}/medications`);
    const medicationsListener = onValue(medicationsRef, (snapshot) => {
        const medicationsData = snapshot.val();
        if(medicationsData) {
            console.log('Medications:', medicationsData);
        }
    });

    return () => {
        medicationsListener();
    };
};

const fetchUserPhysicians = (userId) => {
    const physiciansRef = ref(database, `users/${userId}/physicians`);
    const physiciansListener = onValue(physiciansRef, (snapshot) => {
        const physiciansData = snapshot.val();
        if(physiciansData) {
            console.log('Physicians:', physiciansData);
        }
    });

    return () => {
        physiciansListener();
    };
};

const fetchUserLogs = (userId) => {
    const logsRef = ref(database, `users/${userId}/logs`);
    const logsListener = onValue(logsRef, (snapshot) => {
        const logsData = snapshot.val();
        if(logsData) {
            console.log('Logs:', logsData);
        }
    });

    return () => {
        logsListener();
    };
};

const fetchUserChats = (userId) => {
    const chatsRef = ref(database, `users/${userId}/chats`);
    const chatsListener = onValue(chatsRef, (snapshot) => {
        const chatsData = snapshot.val();
        if(chatsData) {
            console.log('Chats:', chatsData);
        }
    });

    return () => {
        chatsListener();
    };
};

export { fetchUserData, fetchUserMedications, fetchUserPhysicians, fetchUserChats, fetchUserLogs};

