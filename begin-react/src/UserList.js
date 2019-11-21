import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect(() => {
    //     console.log(user);
    // });
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남')
        console.log(user)
        return () => {
            console.log('컴포넌트가 화면에서 사라짐')
            console.log(user)
        }
    }, [user]);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

// function UserList() {
//     const users = [
//         {
//             id: 1,
//             username: 'velopert',
//             email: 'public.velopert@gmail.com'
//         },
//         {
//             id: 2,
//             username: 'tester',
//             email: 'tester@example.com'
//         },
//         {
//             id: 3,
//             username: 'liz',
//             email: 'liz@example.com'
//         }
//     ];

//     return (
//         <div>
//             {users.map(user => (
//                 <User user={user} key={user.id} />
//             ))}
//             {users.map((user, index) => (
//                 <User user={user} key={index} />
//             ))}
//         </div>
//     );

//     // return (
//     //     <div>
//     //         <User user={users[0]} />
//     //         <User user={users[1]} />
//     //         <User user={users[2]} />
//     //     </div>
//     // );
// }

export default React.memo(UserList);