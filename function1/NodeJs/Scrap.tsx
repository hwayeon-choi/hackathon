interface ScrapProps {
  index : number;
  info : ScrapModel;
  handleAdd : () => {};
}

const Scrap: React.FC<ScrapProps> = props => {
  const handleAdd = () => {
    props.handleAdd(props.index);
  };
  return (
    <View>
      <Text>{props.info.name}</Text>
      <Text>{props.info.scrap}</Text>
      <View>
        <Pressable onPress = {handleAdd}>
          <Icon>scrap</Icon>
        </Pressable>
      </View>
    </View>
  );
}

export default Scrap;