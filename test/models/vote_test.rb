# == Schema Information
#
# Table name: votes
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  solution_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
