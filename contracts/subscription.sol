// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SubscriptionManagementContract {
    // Struct to store subscription details
    struct Subscription {
        address subscriber;
        uint256 expirationTimestamp;
    }

    // Mapping to store active subscriptions by subscriber address
    mapping(address => Subscription) public subscriptions;

    // Event emitted when a new subscription is created or extended
    event SubscriptionUpdated(address indexed subscriber, uint256 expirationTimestamp);

    // Function to create or extend a subscription
    function updateSubscription(address _subscriber, uint256 _duration) external {
        require(_duration > 0, "Invalid subscription duration");

        Subscription storage subscription = subscriptions[_subscriber];
        if (subscription.subscriber == address(0) || subscription.expirationTimestamp < block.timestamp) {
            subscription.subscriber = _subscriber;
            subscription.expirationTimestamp = block.timestamp + _duration;
        } else {
            subscription.expirationTimestamp += _duration;
        }

        emit SubscriptionUpdated(_subscriber, subscription.expirationTimestamp);
    }

    // Function to check if a subscriber has an active subscription
    function hasActiveSubscription(address _subscriber) external view returns (bool) {
        Subscription storage subscription = subscriptions[_subscriber];
        return subscription.subscriber != address(0) && subscription.expirationTimestamp > block.timestamp;
    }
}
