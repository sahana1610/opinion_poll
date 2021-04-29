import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../utils/AuthContext"

function Poll(props) {

    const { user, updateUser } = useContext(AuthContext)
    const [yes, setYes] = useState(0)
    const [no, setNo] = useState(0)

    const incrementYesCount = () => {
        updateUser({ ...user, hasVoted: true, voteType: 'YES' })
        setYes(yes + 1)
    }

    const incrementNoCount = () => {
        updateUser({ ...user, hasVoted: true, voteType: 'NO' })
        setNo(no + 1)
    }

    useEffect(() => {
        console.log(user.hasVoted);
    })

    return (
        <div className="vertical-center">
            <h2 className="text-center">
                Are we confident and ready to take up this initiative?
            </h2>

            {user.isAdmin ?
                <div className="mt-5">
                    <h4>Yes count : {yes}</h4>
                    <h4>No count : {no}</h4>
                </div>
                :
                user.hasVoted ?

                    <div>
                        <h3 className="text-success mt-1">You Responded '{user.voteType}'</h3>
                        <h2 className="text-primary mt-5">Thanks for Voting!!!</h2>
                    </div>
                    :
                    <div className="justify-content-between mt-4">
                        <button className="btn btn-success mr-3" onClick={incrementYesCount}>YES</button>
                        <button className="btn btn-danger ml-3" onClick={incrementNoCount}>NO</button>
                    </div>
            }

        </div>
    );
}

export default Poll;