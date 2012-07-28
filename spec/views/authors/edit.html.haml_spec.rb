require 'spec_helper'

describe "authors/edit" do
  before(:each) do
    @author = assign(:author, stub_model(Author,
      :name => "MyString",
      :about => "MyText"
    ))
  end

  it "renders the edit author form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => authors_path(@author), :method => "post" do
      assert_select "input#author_name", :name => "author[name]"
      assert_select "textarea#author_about", :name => "author[about]"
    end
  end
end
