def get_tokenized_docs( text_mining_path, srctxt_path ):
    # import
    import os
    import jieba

    # use dictionary
    jieba.load_userdict( text_mining_path + "/politic_dict.txt" )
    stop_words = []
    f = open( text_mining_path + "/stop_word.txt", encoding="utf8" )
    stop_words = f.readlines()
    for i in range( len( stop_words ) ):
        stop_words[ i ] = stop_words[ i ][ :-1 ]
    f.close()

    # read docs
    docs = []
    for fileName in os.listdir( srctxt_path ):
        if fileName.endswith( '.txt' ) == False:
            continue

        file = open( f'{srctxt_path}/{fileName}', encoding="utf8" )
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


def get_tf_idf( text_mining_path, srctxt_path ):
    # import
    from sklearn.feature_extraction.text import TfidfVectorizer

    # get tokenzied docs
    tokenized_docs = get_tokenized_docs( text_mining_path, srctxt_path )

    # init vectorizer
    TFIDF_vecotrizer = TfidfVectorizer( analyzer='word',
                                        tokenizer=lambda x: x,
                                        preprocessor=lambda x: x,
                                        token_pattern=None )
    TFIDF_vecotrizer.fit( tokenized_docs )

    # get vector
    TFIDF_vector = TFIDF_vecotrizer.transform( tokenized_docs )
    return TFIDF_vector, TFIDF_vecotrizer


def get_tf( text_mining_path, srctxt_path ):
    # import
    from sklearn.feature_extraction.text import CountVectorizer

    # get tokenzied docs
    tokenized_docs = get_tokenized_docs( text_mining_path, srctxt_path )

    # init vectorizer

    TF_vectorizer = CountVectorizer( analyzer='word',
                                     tokenizer=lambda x: x,
                                     preprocessor=lambda x: x,
                                     token_pattern=None )
    TF_vectorizer.fit( tokenized_docs )

    # get vector
    TF_vector = TF_vectorizer.transform( tokenized_docs )
    return TF_vector, TF_vectorizer


def get_SVD_vectors( text_mining_path, srctxt_path, dim ):
    from sklearn.decomposition import TruncatedSVD
    TFIDF_vectors, _ = get_tf_idf( text_mining_path, srctxt_path )
    svd_model = TruncatedSVD( n_components=dim )
    SVD_vectors = svd_model.fit_transform( TFIDF_vectors )
    return SVD_vectors
