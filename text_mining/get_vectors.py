def get_tokenized_docs():
    # import
    import os
    import jieba

    # use dictionary
    jieba.load_userdict( './politic_dict.txt' )
    stop_words = []
    f = open( './stop_word.txt', encoding="utf8" )
    stop_words = f.readlines()
    for i in range( len( stop_words ) ):
        stop_words[ i ] = stop_words[ i ][ :-1 ]
    f.close()

    # read docs
    docs = []
    for fileName in os.listdir( '../src_txt/' ):
        if fileName.endswith( '.txt' ) == False:
            continue

        file = open( f'../src_txt/{fileName}', encoding="utf8" )
        doc = file.readlines()[ 2: ]
        doc = ''.join( doc ).replace( '\n', '' )
        docs.append( doc )
        file.close()

    tokenized_docs = []
    for doc in docs:
        tokens = jieba.lcut( doc )
        for stop_word in stop_words:
            tokens = list( filter( lambda ch: ch != stop_word, tokens ) )
        tokenized_docs.append( tokens )

    return tokenized_docs


def get_tf_idf():
    # import
    from sklearn.feature_extraction.text import TfidfVectorizer

    # get tokenzied docs
    tokenized_docs = get_tokenized_docs()

    # init vectorizer
    TFIDF_vecotrizer = TfidfVectorizer( analyzer='word',
                                        tokenizer=lambda x: x,
                                        preprocessor=lambda x: x,
                                        token_pattern=None )
    TFIDF_vecotrizer.fit( tokenized_docs )

    # get vector
    TFIDF_vector = TFIDF_vecotrizer.transform( tokenized_docs )
    return TFIDF_vector