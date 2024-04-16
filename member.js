function skillsMember() {
    // Get the member id
    var memberId = getMemberId();
    // Get the member object
    var member = getMember(memberId);
    // Get the skills
    var skills = member.skills;
    // Return the skills
    return skills;
}