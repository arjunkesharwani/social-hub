import axios from 'axios';
import Follow from './follow.model';

class FollowService {
  async followUser(followerId: string, followeeId: string) {
    const followerResponse = await axios.get(`http://localhost:5000/${followerId}`);
    const followeeResponse = await axios.get(`http://localhost:5000/${followeeId}`);
    console.log(followeeResponse)
    if (!followerResponse.data) {
      throw new Error('Follower not found');
    }

    if (!followeeResponse.data) {
      throw new Error('Followee not found');
    }

    const follow = new Follow({ followerId, followeeId });
    await follow.save();
    return follow;
  }

  async unfollowUser(followerId: string, followeeId: string) {
    await Follow.findOneAndDelete({ followerId, followeeId });
  }

  async listFollowers(userId: string) {
    const followers = await Follow.find({ followeeId: userId });
    return followers;
  }

  async listFollowing(userId: string) {
    const following = await Follow.find({ followerId: userId });
    return following;
  }
}

export default new FollowService() as FollowService;
