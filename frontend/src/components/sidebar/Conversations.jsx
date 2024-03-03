import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import { useAuthContext } from "../../context/AuthContext"; // Import AuthContext

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	const {authUser} = useAuthContext()
	return (
    <div className="py-2 flex flex-col overflow-auto">
      <p
        className="text-gray-900 text-lg capitalize"
        // style={{ fontSize: "18px", textTransform: "capitalize" }}
      >
        Welcome {authUser.username}
      </p>

      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          // emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;


