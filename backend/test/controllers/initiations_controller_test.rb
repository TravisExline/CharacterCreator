require 'test_helper'

class InitiationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @initiation = initiations(:one)
  end

  test "should get index" do
    get initiations_url, as: :json
    assert_response :success
  end

  test "should create initiation" do
    assert_difference('Initiation.count') do
      post initiations_url, params: { initiation: { characters: @initiation.characters } }, as: :json
    end

    assert_response 201
  end

  test "should show initiation" do
    get initiation_url(@initiation), as: :json
    assert_response :success
  end

  test "should update initiation" do
    patch initiation_url(@initiation), params: { initiation: { characters: @initiation.characters } }, as: :json
    assert_response 200
  end

  test "should destroy initiation" do
    assert_difference('Initiation.count', -1) do
      delete initiation_url(@initiation), as: :json
    end

    assert_response 204
  end
end
